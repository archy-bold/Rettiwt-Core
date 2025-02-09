/**
 * The filter to be used for fetching tweets from Twitter.
 *
 * @public
 */
export interface ITweetFilter {
	/** The list of words to search. */
	words?: string[];

	/** The list of hashtags to search. */
	hashtags?: string[];

	/** The list of usernames whose tweets are to be searched. */
	fromUsers?: string[];

	/** The list of username to whom the tweets to be searched, are adressed. */
	toUsers?: string[];

	/** The list of username mentioned in the tweets to search. */
	mentions?: string[];

	/** The date starting from which tweets are to be searched. */
	startDate?: Date;

	/** The date upto which tweets are to be searched. */
	endDate?: Date;

	/** The id of the tweet, after which the tweets are to be searched. */
	sinceId?: string;

	/** The id of the tweet which is quoted in the tweets to search. */
	quoted?: string;

	/** Whether to fetch tweets that are links or not. */
	links?: boolean;
}
