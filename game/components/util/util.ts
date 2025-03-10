
export const updateDebugMarker = (x: number, y: number) => {
    let marker = document.getElementById("debug-marker");

    if (!marker) {
        marker = document.createElement("div");
        marker.id = "debug-marker";
        document.body.appendChild(marker);
    }

    Object.assign(marker.style, {
        position: "absolute",
        width: "10px",
        height: "10px",
        backgroundColor: "purple",
        borderRadius: "50%",
        left: `${x}px`,
        top: `${y}px`,
        zIndex: "1000",
        pointerEvents: "none"
    });
};
