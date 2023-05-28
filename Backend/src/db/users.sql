create table users (
  id serial primary key,
  first_name varchar(255) null,
  last_name varchar(255) null,
  email varchar(255) not null,
  city varchar(255) not null,
  gender varchar(1) not null,
  img varchar(255)
  role_id serial, 
);

	id, first_name, last_name, email, password, city, gender, img, role_id
