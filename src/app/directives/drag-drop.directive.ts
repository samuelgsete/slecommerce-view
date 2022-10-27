import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[dragDrop]'
})
export class DragDropDirective {

  @Output() fileDropped = new EventEmitter<any>();
  @HostBinding("style.borderColor") private borderColor = "";
  @HostBinding("style.background") private background = '';

  public constructor() { }

  @HostListener("dragover", ["$event"]) 
  public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.borderColor = "rgb(var(--success))";
    this.background = "rgba(var(--success), 0.1)";
  }

  @HostListener("dragleave", ["$event"]) 
  public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.borderColor = "rgb(var(--gray-4))";
    this.background = "rgba(var(--gray-4), 0.1)";
  }

  @HostListener("drop", ["$event"]) 
  public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.borderColor = "rgb(var(--gray-4))";
    this.background = "#fff";

    const files = evt.dataTransfer?.files;
    this.fileDropped.emit(files);
  }
}