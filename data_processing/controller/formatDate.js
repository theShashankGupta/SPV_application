const formatDate=(date)=> {
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${day}${month}${year}`;
}
  
const getLast50Days=()=> {
  const today = new Date();
  const last50Days = [];
  // console.log(today);
  for (let i = 0; i < 70; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() - i);
    last50Days.push(formatDate(currentDate));
  }

  return last50Days;
}

const last50Days = getLast50Days();

export default last50Days;

