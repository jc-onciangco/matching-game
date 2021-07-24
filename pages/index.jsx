import HeadWrapper from "../components/layouts/HeadWrapper";
import App from "../components/App";

export default function Home() {
  return (
    <div className="container">
      <HeadWrapper data={{ title: "Landing Pages" }}>
        <App />
      </HeadWrapper>
    </div>
  );
}
