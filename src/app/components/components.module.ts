import { NgModule } from '@angular/core';
import { RadButton } from './button/button.component';
import { RadChat } from './chat/chat.component';
import { RadContact } from './contact/contact.component';
import { RadCover } from './cover/cover.component';
import { RadDumpster } from './dumpster/dumpster.component';
import { RadLogin } from './login/login.component';
import { RadNavbar } from './navbar/navbar.component';
import { RadProcessItem } from './process-item/process-item.component';
import { RadProcess } from './process/process.component';
import { RadQuote } from './quote/quote.component';
import { RadQuotebar } from './quotebar/quotebar.component';
import { RadRegister } from './register/register.component';
import { RadWarning } from './warning/warning.component';

@NgModule({
  declarations: [
    RadButton,
    RadChat,
    RadDumpster,
    RadLogin,
    RadNavbar,
    RadQuote,
    RadQuotebar,
    RadRegister,
    RadCover,
    RadWarning,
    RadProcess,
    RadProcessItem,
    RadContact,
  ],
  imports: [],
  exports: [
    RadButton,
    RadChat,
    RadDumpster,
    RadLogin,
    RadNavbar,
    RadQuote,
    RadQuotebar,
    RadRegister,
    RadCover,
    RadWarning,
    RadProcess,
    RadProcessItem,
    RadContact,
  ],
})
export class ComponentsModule {}
