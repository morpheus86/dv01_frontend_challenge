export const getGroupByFeature = (datas) => {
  let groups = new Set();
  datas &&
    datas.forEach((data) => {
      if (data.grade) {
        groups.add(data.grade);
      }
    });
  return [...groups].sort();
};

export const getAggregateTotal = (group, datas) => {
  let groupTotal = Array(group.length).fill(0);
  group.forEach((group) => {
    return datas.forEach((d) => {
      if (d.grade === group) {
        let convertedIdx = +group;
        let convertedBalance = +d.currentBalance;
        groupTotal[convertedIdx - 1] += convertedBalance;
      }
    });
  });
  return groupTotal;
};
