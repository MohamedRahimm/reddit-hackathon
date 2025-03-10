export enum Tiles {
    Door,
    Exit,
    Blank,
    Trap,
    Floor
}

export const levelData = [
    [Tiles.Floor, Tiles.Door, Tiles.Floor, Tiles.Floor, Tiles.Floor, Tiles.Floor, Tiles.Floor, Tiles.Floor, Tiles.Floor,],
    [Tiles.Floor, Tiles.Blank, Tiles.Blank, Tiles.Blank, Tiles.Blank, Tiles.Blank, Tiles.Blank, Tiles.Blank, Tiles.Floor,],
    [Tiles.Floor, Tiles.Floor, Tiles.Blank, Tiles.Floor, Tiles.Floor, Tiles.Floor, Tiles.Floor, Tiles.Floor, Tiles.Floor,],
    [Tiles.Floor, Tiles.Blank, Tiles.Blank, Tiles.Blank, Tiles.Blank, Tiles.Blank, Tiles.Blank, Tiles.Blank, Tiles.Floor,],
    [Tiles.Floor, Tiles.Blank, Tiles.Blank, Tiles.Blank, Tiles.Blank, Tiles.Exit, Tiles.Blank, Tiles.Blank, Tiles.Floor,],
    [Tiles.Floor, Tiles.Floor, Tiles.Floor, Tiles.Floor, Tiles.Floor, Tiles.Floor, Tiles.Floor, Tiles.Floor, Tiles.Floor,],
];
