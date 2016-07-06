import DataHandler from '../src/utils/DataHandler';

let customDataHandler = function (a,b,c,d,e) {
	function randomDate(start, end) {
		return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	}

  let d1 = randomDate(new Date(2012, 0, 1), new Date());
  let d2 = randomDate(new Date(2012, 0, 1), new Date());
  let d3 = randomDate(new Date(2012, 0, 1), new Date());
  let r = [{date:d1,price:2}, {date:d2,price:3}, {date:d3,price:4}];
  return r;
}

DataHandler.set('customDataHandler', customDataHandler);

let customDataHandlers = {
	customDataHandler: customDataHandler
}

export default customDataHandlers;