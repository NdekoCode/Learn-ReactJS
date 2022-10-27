import styled from "styled-components";
const Div = styled.div`
  display: none;

  &.modal {
    display: block;
    animation: fadeUp 0.35s ease-out forwards;
    padding: 25px;
    background-color: white;
    min-height: 250px;
    max-width: 350px;
    max-height: 500px;
    border-radius: 5px;
    pointer-events: none;
  }
`;
export default function MyComponent() {
  return (
    <Div className="modal">
      <p>Je suis dans root</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
        perferendis porro numquam quos perspiciatis, modi, corporis quibusdam
        mollitia suscipit non necessitatibus ab quae, natus nemo aut dolorem
        odit officia iusto.
      </p>
    </Div>
  );
}
