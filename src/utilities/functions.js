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

export const getAggregateTotalByFilterRequirements = (
  groups,
  filterOptions,
  datas
) => {
  let groupTotal = Array(groups.length).fill(0);
  const { homeOwnership, year, quarter, term } = filterOptions;
  let allFilterList = [];
  groups.forEach((group) => {
    const filterResult = datas.filter((data) => {
      if (group === data.grade) {
        if (homeOwnership || year || quarter || term) {
          return (
            (homeOwnership ? homeOwnership === data.homeOwnership : true) &&
            (year ? year === data.year : true) &&
            (quarter ? quarter === data.quarter : true) &&
            (term ? term === data.term : true)
          );
        }
      }
    });
    allFilterList = [...allFilterList, ...filterResult];
  });
  allFilterList.forEach((list) => {
    groupTotal[+list.grade - 1] += +list.currentBalance;
  });
  return groupTotal;
};

export const getAllGroups = (datas) => {
  let group = {};
  datas.forEach((data) => {
    for (const key in data) {
      if (key !== "currentBalance" && key !== "grade") {
        if (!group[key]) {
          group[key] = new Set();
        }
        if (data[key]) {
          group[key].add(data[key]);
        }
      }
    }
  });
  for (const key in group) {
    group[key] = [...group[key]].sort();
  }
  return group;
};
