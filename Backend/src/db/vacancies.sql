create table users (
  id serial primary key,
  title varchar(255) null,
  salary int not null,
  company varchar (255) not null,
  city varchar(255) not null,
  description text not null,
  id_1 serial,
  id_2 serial,
)
id, title, salary, company, city, description, id_1, id_2