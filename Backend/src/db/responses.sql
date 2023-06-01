create table responses (
  id serial primary key,
  vacancies_id integer not null,
  users_id integer not null,
  foreign key (vacancies_id) references vacancies (id),
  foreign key (users_id) references users (id)
)