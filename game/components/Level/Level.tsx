import { useEffect, useState } from "react";
import Character from "../Character/Character";
import "./Level.css";
import { levelData, Tiles } from "./levelGen";

export default function Level() {
    const [characterPos, setCharacterPos] = useState({ x: 0, y: 0, size: 0 });
    const [isMoving, setIsMoving] = useState(false);
    const [isFalling, setIsFalling] = useState(true);

    const updateCharacterPosition = () => {
        const doorElement = document.getElementById("door");
        if (doorElement) {
            const rect = doorElement.getBoundingClientRect();
            setCharacterPos({ x: rect.x, y: rect.y, size: rect.width });
        }
    };

    useEffect(() => {
        updateCharacterPosition();
        window.addEventListener("resize", updateCharacterPosition);
        return () => window.removeEventListener("resize", updateCharacterPosition);
    }, []);

    useEffect(() => {
        if (!isMoving) return;

        const moveCharacter = setInterval(() => {
            const characterElement = document.getElementById("character");
            if (!characterElement) return;

            const rect = characterElement.getBoundingClientRect();
            const nextY = rect.y + 5;
            const belowTile = document.elementFromPoint(rect.x + 5, nextY + rect.height);
            if (belowTile && belowTile.id) {
                setIsFalling(false);
            } else {
                setIsFalling(true);
                setCharacterPos(prev => ({ ...prev, y: prev.y + 5 }));
                return;
            }

            if (!isFalling) {
                const nextX = rect.x + 5;
                const frontTile = document.elementFromPoint(nextX + rect.width, rect.y + rect.height / 2);

                if (!frontTile || !frontTile.id) {
                    setCharacterPos(prev => ({ ...prev, x: prev.x + 5 }));
                }
            }
        }, 1000 / 60);

        return () => clearInterval(moveCharacter);
    }, [isMoving, isFalling]);


    return (
        <div
            id="grid"
            onClick={() => setIsMoving(true)}
            style={{

                gridTemplateColumns: `repeat(${levelData[0].length}, 1fr)`,
                gridTemplateRows: `repeat(${levelData.length}, 1fr)`,
            }}
        >
            {levelData.flat().map((tile, index) => (
                <div
                    id={tile === Tiles.Door ? "door" : tile !== Tiles.Blank ? `tile-${index}` : undefined}
                    className="tile"
                    key={index}
                    style={{
                        backgroundColor: tile === Tiles.Floor ? "red" : tile === Tiles.Door ? "yellow" : tile === Tiles.Exit ? "blue" : "transparent",
                        border: tile === Tiles.Blank ? "none" : "1px solid black",
                    }}
                />
            ))}
            <Character position={characterPos} />
        </div>
    );
};
