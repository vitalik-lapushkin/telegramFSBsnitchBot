create table users(
    id integer CONSTRAINT userPK PRIMARY KEY,
    username varchar(150),
    alias varchar(150),
    rating integer CHECK (rating>=0),
);

