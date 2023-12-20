interface Props {
    ratio: number;
    children: React.ReactNode;
}
export const AspectRatio = ({ ratio = 1 / 1, ...children }: Props) => {

    return (
        <div
            className="aspect-ratio"
            style={{ paddingTop: `${100 / ratio}%` }}
            {...children}
        />
    );
};
export default AspectRatio
