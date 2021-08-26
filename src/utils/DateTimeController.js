import moment from 'moment';

export const dateFunc = (date) => {
  let today = moment(new Date());
  let diff = today.diff(moment(`${date}`), 'second');
  // let diff = today.diff(new Date(`${date}`), 'second');
  // console.log('logging diff', diff);
  if (diff === 0 || diff < 60) {
    return 'just now';
  } else if (diff === 60) {
    return '1 min ago';
  } else if (diff > 60 && diff < 3600) {
    return `${Math.floor(diff / 60)} min ago`;
  } else if (diff > 3600 && diff < 86400) {
    return `${Math.floor(diff / 3600)} hours ago`;
  } else if (diff >= 86400 && diff < 2419200) {
    return `${Math.floor(diff / 86400)} days ago`;
  } else if (diff === 2419200) {
    return `${Math.floor(diff / 2419200)} month ago`;
  } else if (diff >= 2419200 && diff < 31536000) {
    return `${Math.floor(diff / 2419200)} months ago`;
  } else if (diff >= 31536000) {
    return `${Math.floor(diff / 31536000)} year ago`;
  }
};
