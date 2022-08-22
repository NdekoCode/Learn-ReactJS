import { Card } from "./Card";
import { Tab, Tabs } from "./Tabs";
import ErrorBoundary from "./ErrorBoundary";
export const Home = () => {
  return (
    <div className="container my-5">
      <Tabs>
        {[...new Array(2)].map((v, i) => (
          <Tab title={`Onglet numero ${i}`} key={i}>
            {`Onglet numero ${i}`} sit amet consectetur adipisicing elit. Id
            iste similique error.
          </Tab>
        ))}
        <Tab title="Premier onglet">
          Premier onglet dolor sit amet consectetur adipisicing elit. Id iste
          similique error.
        </Tab>
        <Tab title="Deuxième onglet">
          Deuxième onglet, ipsum dolor sit amet consectetur adipisicing elit. Id
          iste similique error.
        </Tab>
      </Tabs>
      <Card />
    </div>
  );
};
