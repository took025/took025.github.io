import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { Title } from '@angular/platform-browser';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussel sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})

// tslint:disable-next-line:component-class-suffix
export class TreeFlatOverviewExample {
title = 'hello';
h1Style = false;
items: Array<any> = [];

firstClick() {
  this.h1Style = !this.h1Style;
}

  private transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      // tslint:disable-next-line:object-literal-shorthand
      level: level,
    };
  }
// tslint:disable-next-line:member-ordering
treeControl = new FlatTreeControl<ExampleFlatNode>(
  node => node.level, node => node.expandable);

// tslint:disable-next-line:member-ordering
treeFlattener = new MatTreeFlattener(
  this.transformer, node => node.level, node => node.expandable, node => node.children);

// tslint:disable-next-line:member-ordering
dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

constructor() {
this.dataSource.data = TREE_DATA;


this.items = [
  // tslint:disable-next-line: max-line-length
        {name : 'http://www.hereandabroad.com/wp-content/gallery/le-mas-des-alpilles-at-domaine-de-st-remy/facade-2-mas-des-alpilles-luxury-provence-rental-900x600-900x600.jpg'},
        {name : 'http://i.imgur.com/tSrs2.jpg'},
        {name : 'https://www.lagarganta.com/wp-content/uploads/2018/06/entorno-la-garganta-900x600.jpg'},
        {name : 'http://aiesec.at/wp-content/uploads/2015/07/5718269042_8b2181bed8_o-900x600.png'},
  // tslint:disable-next-line: max-line-length
        {name : 'http://www.hereandabroad.com/wp-content/gallery/le-mas-des-alpilles-at-domaine-de-st-remy/facade-2-mas-des-alpilles-luxury-provence-rental-900x600-900x600.jpg'},
        {name : 'http://i.imgur.com/tSrs2.jpg'},
        {name : 'https://www.lagarganta.com/wp-content/uploads/2018/06/entorno-la-garganta-900x600.jpg'},
        {name : 'http://aiesec.at/wp-content/uploads/2015/07/5718269042_8b2181bed8_o-900x600.png'},
      ];
}

hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
