import { Fade } from "../components/Fade";
import { Tab, Tabs } from "../components/Tabs";

const TabContent = () => {
  return (
    <Fade visible={true}>
    <div className="container">
    <Tabs>
      {[...new Array(2)].map((v, i) => (
        <Tab title={`Onglet numero ${i}`} key={i}>
          {`Onglet numero ${i}`} sit amet consectetur adipisicing elit. Id iste
          similique error.
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
    </div>
    </Fade>
  );
};
export default TabContent;
