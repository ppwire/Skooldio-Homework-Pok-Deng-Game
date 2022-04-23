module.exports.getPoint = (payload) => {
   if (payload.face === 'Jack' || payload.face === 'Queen' || payload.face === 'King' || payload.face === 10) {
      return 0;
   } else if (payload.face === "Ace") {
      return 1
   } else {
      return payload.face
   }
}

module.exports.displayCard = (payload) => {
   return `${payload.suit}-${payload.face}`
}

module.exports.calPoint = (point) => {
   if (point < 10) {
      return point
   } else {
      return point - 10
   }
}