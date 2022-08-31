const initState = [{
    id:1,
    title: "Si vous voulez d’autres générateurs de faux texte ",
    body:"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
},{
    id:2,
    title: "Si l’humour ce n’est pas pour vous",
    body:"Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
},
{
    id:3,
    title: "Votre client n’aime pas ça, vous pouvez vous tourner",
    body: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
},
{
    id:4,
    title: "Si vous voulez d’autres générateurs de faux texte",
    body: "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",
},{
    id:5,
    title:"Lorem Ipsum, jetez un oeil",
    body:"Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI."
}
];
let id = 5;
export const DELETE_POST= "DELETE_POST";
export const postReducer = (state= initState, action)=>{
    switch(action.type){
        case DELETE_POST:
        return state.filter(post=>post.id,action.payload.id);
        default:
        return state
    }
}