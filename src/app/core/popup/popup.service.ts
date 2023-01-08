import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
} from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from './popup.component';

@Injectable()
export class PopupService {
  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  showAsComponent(message: string) {
    const popup = document.createElement('popup-component');
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    const popupComponentRef = factory.create(this.injector, [], popup);
    this.applicationRef.attachView(popupComponentRef.hostView);
    const timeOut = setTimeout(() => {
      popup && document.body.removeChild(popup);
      clearTimeout(timeOut);
    }, 3000);
    popupComponentRef.instance.closed.subscribe(() => {
      clearTimeout(timeOut);
      document.body.removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });
    popupComponentRef.instance.message = message;
    document.body.appendChild(popup);
  }

  showAsElement(message: string) {
    const timeOut = setTimeout(() => {
      popupEl && document.body.removeChild(popupEl);
      clearTimeout(timeOut);
    }, 3000);
    const popupEl: NgElement & WithProperties<PopupComponent> =
      document.createElement('popup-element') as any;
    popupEl.addEventListener('closed', () => {
      clearTimeout(timeOut);
      document.body.removeChild(popupEl);
    });

    popupEl.message = message;
    document.body.appendChild(popupEl);
  }
}
