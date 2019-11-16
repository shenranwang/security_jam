const IsVictory = (cells) => {
    return cells.filter(c => c === null).length === 1;
}
  
  // Return true if all `cells` are occupied.
const IsDraw = (cells) => {
    return cells.filter(c => c === null).length === 0;
}
  
const TicTacToe = {
    setup: () => ({ cells: Array(9).fill(null) }),
  
    moves: {
      clickCell: (G, ctx, id) => {
        if (G.cells[id] === null) {
          G.cells[id] = ctx.currentPlayer;
        }
      },
    },
  
    endIf: (G, ctx) => {
      if (IsVictory(G.cells)) {
        alert('game won by ', ctx.currentPlayer)
        return { winner: ctx.currentPlayer };
      }
      if (IsDraw(G.cells)) {
        return { draw: true };
      }
    },
};

export default TicTacToe;