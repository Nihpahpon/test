import { Component } from '@angular/core';
import { Tree } from '../tree';

@Component({
  selector: 'app-compb2',
  templateUrl: './compb2.component.html',
  styleUrls: ['./compb2.component.scss']
})
export class Compb2Component {

  tree:Tree[] = [
    { name:'กระบองเพชร'},
    { name:'ไผ่กวนอิม' },
    { name:'พลูด่าง'},
    { name:'เฟิร์นข้าหลวง'},
    { name:'สวีดิชไอวี่'},
    { name:'กุหลาบหิน'}
  ]

  filteredTree: Tree[] = this.tree;
  searchTree(text:string){
    this.filteredTree = this.tree.filter(Trees=>{
      const TreesName = Trees.name.toLowerCase();
      const searchtrees = text.toLowerCase();
      return TreesName.indexOf(searchtrees)!==-1
    })
  }
}
