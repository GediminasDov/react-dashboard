import Registry from './Registry';

Registry.set('getData', function getData(args){
  return datum;
});

export var datum = [{
    key: "Cumulative Return",
    values: [
      {
        "label" : "A" ,
        "value" : -29.765957771107
      } ,
      {
        "label" : "B" ,
        "value" : 0
      } ,
      {
        "label" : "C" ,
        "value" : 32.807804682612
      } ,
      {
        "label" : "D" ,
        "value" : 196.45946739256
      } ,
      {
        "label" : "E" ,
        "value" : 0.19434030906893
      } ,
      {
        "label" : "F" ,
        "value" : -98.079782601442
      } ,
      {
        "label" : "G" ,
        "value" : -13.925743130903
      } ,
      {
        "label" : "H" ,
        "value" : -5.1387322875705
      }
    ]
  }
];

export var store = {
  title: '',
  layout:'Geary',
  regions: {
    left: [
      {
        header:'Left',
        type: 'Chart',
        settings: {
          id:'lineChart',
          type: 'discreteBarChart',
          x: 'label',
          y: 'value'
        },
        data: {
          type: 'function',
          name: 'getData',
          args: [
            'http://data.com/data.json'
          ]
        }
      },
    ],
    right: [
      {
        header:'Right',
        type: 'Chart',
        settings: {
          id:'barChart',
          type: 'discreteBarChart',
          x: 'label',
          y: 'value'
        },
        data: {
          type: 'function',
          name: 'getData',
        }
      }
    ],
    top: [
      {
        type: 'Autocomplete',
        name: 'some-name',
        multi: true,
        url: 'http://localhost:3004/options?q={{keyword}}',
        onChange: {
          type: 'function',
          name: 'onAutocompleteChange'
        },
      },
      {
        type: 'Table',
        rowHeight: 30,
        width: 800,
        maxHeight: 5000,
        headerHeight:50,
        data: {
          type: 'function',
          name: 'getTableData'
        },
        settings: {
          table: {
            columns: {
              cells: {

              }
            }
          }
        }
      },
      {
        header:'Top',
        type: 'Chart',
        settings: {
          id:'lineChart2',
          type: 'discreteBarChart',
          x: 'label',
          y: 'value',
          height: 400
        },
        data: {
          type: 'function',
          name: 'getData',
          args: [
            ['value', 'label']
          ]
        }
      }
    ],
    middle: [
      {
        header:'Bottom',
        type: 'Chart',
        settings: {
          id:'barChart2',
          type: 'discreteBarChart',
          x: 'label',
          y: 'value'
        },
        data: {
          type: 'function',
          name: 'getData',
        }
      }
    ],
  }
};