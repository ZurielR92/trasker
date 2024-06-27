const board = {
    tasks: [
      { id: "card1", content: "bake cake" },
      { id: "card2", content: "wash utensils" },
      { id: "card3", content: "Read book" },
      { id: "card4", content: "complete proofread" },
      { id: "card5", content: "water plants" },
      { id: "card6", content: "iron dresses" },
      { id: "card7", content: "Help friends" },
      { id: "card8", content: "braid hair" },
      { id: "card9", content: "comb hair" },
      { id: "card10", content: "buy prepaid" },
      { id: "card11", content: "sweep room" },
      { id: "card12", content: "fetch water" },
      { id: "card13", content: "watch soccer" },
      { id: "card14", content: "repair meter" },
      { id: "card15", content: "clean room" },
      { id: "card16", content: "wash car" },
      { id: "card17", content: "mob rooms" },
      { id: "card18", content: "close window" },
      { id: "card19", content: "run errands" },
      { id: "card20", content: "water plants" }
    ],


    columnsData: [
      {
        id: "column1",
        title: "plan",
        taskIds: ["card1", "card2", "card3", "card4"]
      },
      {
        id: "column2",
        title: "to do",
        taskIds: ["card5", "card6", "card7", "card8"]
      },
      {
        id: "column3",
        title: "doing",
        taskIds: ["card9", "card10", "card11", "card12"]
      },
      {
        id: "column4",
        title: "done",
        taskIds: ["card13", "card14", "card15", "card16"]
      },
      {
        id: "column5",
        title: "logs",
        taskIds: ["card17", "card18", "card19", "card20"]
      }
    ],
    columnOrder: ["column1", "column2", "column3", "column4", "column5"]
  };



  export default board;