import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 *
 * 具有嵌套结构的食物数据。每个节点都有一个名称和一个可选的子节点列表。
 *
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: '根目录',
    children: [{ name: 'home' }, { name: '菜单2' }, { name: '菜单3' }],
  },
  // {
  //   name: 'Vegetables',
  //   children: [
  //     {
  //       name: 'Green',
  //       children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
  //     },
  //     {
  //       name: 'Orange',
  //       children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
  //     },
  //   ],
  // },
];

/**
 * Flat node with expandable and level information
 *
 * 具有可扩展和级别信息的平面节点
 *
 */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 *
 * 具有嵌套结构的食物数据。每个节点都有一个名称和一个可选的子节点列表。
 *
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

/**
 * Flat node with expandable and level information
 *
 * 具有可扩展和级别信息的平面节点
 *
 */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  sidenav = true;
  handleClick = () => {
    this.sidenav = !this.sidenav;
  };
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
