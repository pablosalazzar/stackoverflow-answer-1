import { Injectable, Inject, Query } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {


  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}


  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(@Query() query: any) {

    console.log(query);

    const users = await this.userRepository
    .createQueryBuilder()
    .select(['firstName', 'lastName'])
    .where('LOWER(firstName) LIKE :search', {
      search: `%${query.search.toLowerCase()}%`,
    })
    .getRawMany();
  
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
