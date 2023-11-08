        // const heading=React.createElement("h1",{id:"heading", xyz:"abc"},"hello form react.js");

        const parent=React.createElement("div",{id:"parent"},[
                React.createElement("div",{id:"child1"},
                [React.createElement("h1",{id:"h1"},"i'm on h1 tag"),React.createElement("h2",{id:"h2"},"i'm on h2 tag")]),
                React.createElement("div",{id:"child2"},
                [React.createElement("h1",{id:"h1"},"i'm on h1 tag"),React.createElement("h2",{id:"h2"},"i'm on h2 tag")])
        ]
       );

        const root=ReactDOM.createRoot(document.getElementById("root"));
        console.log(parent);
        root.render(parent);