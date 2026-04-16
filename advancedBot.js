const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();
const logger = require('./utils/logger');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    '🚀 *Welcome to Advanced Solana Booster Bot*\n\n' +
    'Choose a service:',
    Markup.inlineKeyboard([
      [Markup.button.callback('📈 Volume Booster', 'volume_booster')],
      [Markup.button.callback('⭐ Rank Booster', 'rank_booster')],
      [Markup.button.callback('🔥 Trending Booster', 'trending_booster')],
      [Markup.button.callback('👥 Holder Reactions', 'holder_booster')],
      [Markup.button.callback('💰 Smart Sell', 'smart_sell')],
      [Markup.button.callback('🎯 Bump Booster', 'bump_booster')],
      [Markup.button.callback('👍 Reaction Booster', 'reaction_booster')],
      [Markup.button.callback('💎 Referral Program', 'referral')]
    ])
  );
});

bot.action('volume_booster', async (ctx) => {
  await ctx.answerCallbackQuery();
  ctx.reply('📈 *Volume Booster*\n\nEnter token address:', { parse_mode: 'Markdown' });
});

bot.action('rank_booster', async (ctx) => {
  await ctx.answerCallbackQuery();
  ctx.reply('⭐ *Rank Booster*\n\nEnter token address:', { parse_mode: 'Markdown' });
});

bot.action('trending_booster', async (ctx) => {
  await ctx.answerCallbackQuery();
  ctx.reply('🔥 *Trending Booster*\n\nEnter token address:', { parse_mode: 'Markdown' });
});

bot.action('holder_booster', async (ctx) => {
  await ctx.answerCallbackQuery();
  ctx.reply('👥 *Holder Reactions*\n\nEnter token address:', { parse_mode: 'Markdown' });
});

bot.action('smart_sell', async (ctx) => {
  await ctx.answerCallbackQuery();
  ctx.reply('💰 *Smart Sell*\n\nSelect strategy:');
});

bot.action('bump_booster', async (ctx) => {
  await ctx.answerCallbackQuery();
  ctx.reply('🎯 *Bump Booster*\n\nSelect platform:');
});

bot.action('reaction_booster', async (ctx) => {
  await ctx.answerCallbackQuery();
  ctx.reply('👍 *Reaction Booster*\n\nEnter token address:', { parse_mode: 'Markdown' });
});

bot.action('referral', async (ctx) => {
  await ctx.answerCallbackQuery();
  ctx.reply('💎 *Referral Program - Earn 5%*\n\nYour code: ' + ctx.from.id, { parse_mode: 'Markdown' });
});

bot.help((ctx) => {
  ctx.reply('📖 *Commands:*\n/start - Start bot\n/help - Help', { parse_mode: 'Markdown' });
});

bot.launch();
logger.info('✅ Bot started');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));