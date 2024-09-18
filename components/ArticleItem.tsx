import { ReactNode, FC } from "react";
import { BookmarkIcon, HeartIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LabelButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Button
      className={cn(
        "flex items-center gap-0.5 text-sm text-muted-foreground px-2",
        className
      )}
      variant="ghost"
    >
      {children}
    </Button>
  );
};

export const ArticleItem: FC<Props> = ({
  title,
  abstract,
  thumbnailUrl,
  likeCount,
  userFullname,
  userAvatarUrl,
}) => {
  return (
    <Card>
      <CardContent className="grid w-full gap-y-4 pt-6 grid-cols-[1fr,110px] items-start">
        <CardTitle className="text-xl font-medium line-clamp-2">
          {title}
        </CardTitle>
        <div className="w-[110px] h-[55px] relative">
          <Image
            src={thumbnailUrl}
            alt={title}
            className="object-cover"
            sizes="110px"
            priority
            fill
          />
        </div>
        <CardDescription className="mt-2 line-clamp-3">
          {abstract}
        </CardDescription>
      </CardContent>

      <div className="flex justify-between items-center px-6 pb-6">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <Image src={userAvatarUrl} alt={userFullname} width={40} height={40} />
            <AvatarFallback>{userFullname}</AvatarFallback>
          </Avatar>
          {userFullname}
        </div>
        <div className="flex">
          <LabelButton className="hover:text-red-500">
            <HeartIcon className="h-5 w-5" />
            <p>{likeCount}</p>
          </LabelButton>
          <LabelButton className="hover:text-green-500">
            <BookmarkIcon className="h-5 w-5" />
          </LabelButton>
        </div>
      </div>
    </Card >
  );
};

export default ArticleItem;

interface Props {
  title: string;
  abstract: string;
  thumbnailUrl: string;
  likeCount: number;
  userFullname: string;
  userAvatarUrl: string;
}
