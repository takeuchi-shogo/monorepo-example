import { Observable } from 'rxjs';

export interface IUserService {
  findOneById(id: any): Observable<any>;
}
