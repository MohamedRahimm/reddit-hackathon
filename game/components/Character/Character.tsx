type Position = {
    x: number;
    y: number;
    size: number;
};

type CharacterProps = {
    position: Position;
};
export default function Character({ position }: CharacterProps) {
    return (
        <div
            id="character"
            style={{
                position: "absolute",
                width: `${position.size}px`,
                height: `${position.size}px`,
                backgroundColor: "green",
                borderRadius: "50%",
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: "transform 0.02s linear"
            }}
        />
    );
};
