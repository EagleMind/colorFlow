interface Props {
    ratio: number;
    children: React.ReactNode;
}
export const AspectRatio = ({ ratio, ...children }: Props) => {

    return (
        <div
            className="aspect-ratio  "
            style={{ paddingTop: `${100 / ratio}%` }}
            {...children}
        />
    );
};
export default AspectRatio
