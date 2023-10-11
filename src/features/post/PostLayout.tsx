import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDate } from '@/lib/formatDate';
import { PostHome } from '@/src/query/post.query'
import clsx from 'clsx';
import { MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import React ,{PropsWithChildren} from 'react'

type PostLayoutProps = PropsWithChildren<{
    user:PostHome["user"],
    createdAt?:Date,
    classname?:string,
    postId?:string
}>;

const PostLayout = ({
  classname,
  user,
  createdAt,
  postId,
  children
}: PostLayoutProps) => {
  return (
    <div className={clsx("flex w-full flex-row items-start p-4", classname)}>
      <Avatar>
        {user.image ? <AvatarImage src={user.image} alt={user.name!} /> : null}
        <AvatarFallback>
          {user.username.slice(0, 2).toLocaleUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="ml-4 flex w-full flex-col gap-2">
        <Link href={`/users/${user.id}`}>
          <div className="flex flex-row items-center gap-2">
            <p className="text-sm text-card-foreground mr-auto">
              {user.username}
            </p>
            {createdAt ? (
              <p className="text-sm text-muted-foreground">{formatDate(createdAt)}</p>
            ) : null}
            <button>
              <MoreHorizontal size={20} />
            </button>
          </div>
        </Link>
        {children}
      </div>
    </div>
  );
};

export default PostLayout