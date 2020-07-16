// 何かキーが押されるまで待つ
function waitPressKey() {
    return new Promise((resolve, reject) => {
        function f(e) {
            // イベントの監視を解除
            document.removeEventListener("keydown", f);

            // キーの番号を返す
            resolve(e.keyCode);
        }

        // キーが押されたら
        document.addEventListener("keydown", f);
    });
}