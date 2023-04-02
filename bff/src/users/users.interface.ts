import { Observable } from 'rxjs';

export interface IUserService {
  findOneById(id: number): Observable<any>;
}
