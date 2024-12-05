// JavaScript 动态生成雪花
const snowflakesContainer = document.querySelector('.snowflakes');

// 创建雪花
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 3 + 's';
    snowflake.style.opacity = Math.random();
    snowflakesContainer.appendChild(snowflake);

    // 动画完成后移除雪花
    setTimeout(() => {
        snowflake.remove();
    }, 7000);
}

// 定期生成雪花
setInterval(createSnowflake, 200);
