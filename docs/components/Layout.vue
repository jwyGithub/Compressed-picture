<script lang="tsx">
export default {
    name: 'Home',
    setup(props, { emit, expose, slots, attrs }) {
        return () => (
            <div class='container'>
                <p class='title'>Easy to use graphic library</p>

                <p class='img'>
                    <img src='/graph-module/home.png' />
                </p>
                <p class='buttons'>
                    <a href='/graph-module/guide/introduction.html'>Getting Started</a>
                    <a href='/graph-module/guide/getting-started.html'>Install</a>
                </p>
            </div>
        );
    }
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
    .title {
        font-size: 40px;
        line-height: 1.25;
        font-weight: 900;
        letter-spacing: -1.5px;
        max-width: 960px;
        margin: 30px auto;
        background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        user-select: none;
    }

    .img {
        img {
            display: block;
            width: 70%;
            height: auto;
            margin: 0 auto;
        }
    }
    .buttons {
        display: flex;
        margin-top: 30px;
        a {
            border: 0;
            outline: none;
            font-size: 16px;
            margin: 0 20px;
            padding: 10px;
            border-radius: 10px;
            color: #476582;
            background-color: #fff;
            user-select: none;
            cursor: pointer;
            &:first-child {
                background-color: #42d392;
                color: #fff;
            }
            &:nth-child(2) {
                font-size: 16px;
                display: inline-block;
                background-color: #f1f1f1;
                padding: 8px 18px;
                font-weight: 500;
                transition: background-color 0.5s, color 0.5s;
            }
        }
    }
}
</style>

