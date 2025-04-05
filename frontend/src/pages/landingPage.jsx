import { LandingBody } from "../components/body";
import { Header } from "../components/header";

export function Landing() {
    return <div style = {{backgroundColor : "#f3fcf1"}}>
        <Header />
        <LandingBody />
    </div>
}