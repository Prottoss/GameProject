export class Comments
{
    commentID: string;
    userComment: string;
    commentDate: Date;

    constructor (uComments: string, cID: string, cDate:Date)
    {
        this.userComment = uComments;
        this.commentDate = cDate;
        this.commentID = cID;
    }


    static generateEmptyComment(){
        return new Comments("","",new Date());
    }
} 