module.exports = {
	name: 'user-info',
	usage: '<user-info>',
	description: 'return the requesters info',
	args: false,
	guildOnly: false,
	execute(message, args) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};