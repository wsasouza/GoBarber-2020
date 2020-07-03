import ImailProvider from '../models/IMailProvider';
import ISendMailDTO from '../dtos/ISendMailDto';

export default class FakeMailProvider implements ImailProvider {
  private messages: ISendMailDTO[] = [];

  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messages.push(message);
  }
}
