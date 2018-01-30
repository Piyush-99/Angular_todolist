export class ListService {
	list: string[] = [];
	done: string[] = [];

  getlist() {
    return this.list;
  }
  
  removeel(text: string) {
  	this.list.splice(this.list.indexOf(text),1);
  }

  removeall() {
    this.done.splice(0,this.done.length);
  }

  addlistelement(text: string) {
    this.list.push(text);
  }

  getdone() {
  	return this.done;
  }

  addtodonelist(text: string) {
  	this.done.push(text);
  }
}