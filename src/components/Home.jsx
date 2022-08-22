import { Tab, Tabs } from "./Tabs";
export const Home = () => {
  return (
    <div className="container my-5">
      <Tabs>
        <Tab title="Premier onglet">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id iste
          similique error.
        </Tab>
        <Tab title="Deuxième onglet">
          Deuxième, ipsum dolor sit amet consectetur adipisicing elit. Id iste
          similique error.
        </Tab>
      </Tabs>
    </div>
  );
};
