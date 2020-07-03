import ISendMailDTO from '../dtos/ISendMailDto';

export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
