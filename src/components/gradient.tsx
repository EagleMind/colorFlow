

export interface Gradient {
    angle: number;
    from: number;
    to: number;
}

export default function Gradient({ angle = 0, from, to }: Gradient) {
    return (
        <div className="rounded-t-lg"
            style={{
                backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`
            }}
        />
    );
};
