import { Container } from "./styled";

interface PropsStyled {
    width: number | string;
    height: number | string;
    borderRadius: number | string;
    marginTop: number | string;
}

export default function Skeleton({width, height, borderRadius, marginTop}: PropsStyled) {
    return (
        <Container width={width} height={height} borderRadius={borderRadius} marginTop={marginTop}/>
    )
}