import { ScrollView, Text } from "react-native";
import Features from "../../../components/features";
import FeaturesTop from "../../../components/featuresTop";
import InfoSilder from "../../../components/infoSlider";
import SaldoContainer from "../../../components/saldoContainer";

const BerandaPage = () => {
  return (
    <ScrollView>
        <SaldoContainer/>
        <FeaturesTop/>
        <Features/>
        <InfoSilder/>
    </ScrollView>
  );
}

export default BerandaPage;