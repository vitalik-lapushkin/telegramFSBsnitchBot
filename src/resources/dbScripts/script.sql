create schema fsb_snitch_bot;

create table fsb_snitch_bot.users(
    id integer CONSTRAINT userPK PRIMARY KEY,
    username varchar(150),
    alias varchar(150),
    rating integer CHECK (rating>=0) default 0
);
