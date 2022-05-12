export const calculateVipStaus = (amount: number) => {
  if (amount > 500 && amount < 20000) {
    return {
      level: 'Bronze',
      progress: 2,
    }
  } else if (amount > 20000 && amount < 50000) {
    return {
      level: 'Silver',
      progress: 4,
    }
  } else if (amount > 50000 && amount < 100000) {
    return {
      level: 'Gold',
      progress: 6,
    }
  } else if (amount > 100000 && amount < 500000) {
    return {
      level: 'Ruby',
      progress: 8,
    }
  } else if (amount > 500000 && amount < 1000000) {
    return {
      level: 'Saphire',
      progress: 10,
    }
  } else if (amount > 1000000) {
    return {
      level: 'Diamond',
      progress: 12,
    }
  } else {
    return {
      level: 'None',
      progress: 1,
    }
  }
}
