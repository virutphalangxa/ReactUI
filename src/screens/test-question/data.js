const data = [
    { id: 1, question: '1.Which tag for the biggest header?', answerA: '<h5>', answerB: '<p>', answerC: '<h1>', correctAnswer: 'C', img: 'https://s3-alpha-sig.figma.com/img/bb18/fb17/fc3957fe591fc5e3e1a280578267654f?Expires=1623628800&Signature=Eo3tzEtmCBn4qqsgs~fhKLhfeBl1YbRDIOL3rGliIViBhjNUz1FlAa4tIRjlaPPVYNL6zUmMrnxoREkDr~AMji9eQySCdy20wsqxviernpoRLMH45G44iaGf6Oz242Om2HxS1enDu3C7qt6s3jvfRvHujTaZIgkkrawFDrim2i9G6T66sUhgu4ynDpU~2zDYjEa-jstg3JeyAP1TzhVr-BhIuQdQiuIG0KtdekCxnVeIiJzy1O18w9CZgy9StgZRfAvbMK22kzaPD3h5axtscsWiAt8WL~W3~8jYfxRWJUtfbb~uGqNanKJXt4pznNTojTrufwsBdorT69BOuNT78g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 2, question: '2.Which tag for the biggest header?', answerA: '<h5>', answerB: '<p>', answerC: '<h1>', correctAnswer: 'C', img: 'https://s3-alpha-sig.figma.com/img/bb18/fb17/fc3957fe591fc5e3e1a280578267654f?Expires=1623628800&Signature=Eo3tzEtmCBn4qqsgs~fhKLhfeBl1YbRDIOL3rGliIViBhjNUz1FlAa4tIRjlaPPVYNL6zUmMrnxoREkDr~AMji9eQySCdy20wsqxviernpoRLMH45G44iaGf6Oz242Om2HxS1enDu3C7qt6s3jvfRvHujTaZIgkkrawFDrim2i9G6T66sUhgu4ynDpU~2zDYjEa-jstg3JeyAP1TzhVr-BhIuQdQiuIG0KtdekCxnVeIiJzy1O18w9CZgy9StgZRfAvbMK22kzaPD3h5axtscsWiAt8WL~W3~8jYfxRWJUtfbb~uGqNanKJXt4pznNTojTrufwsBdorT69BOuNT78g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 3, question: '3.Which tag for the biggest header?', answerA: '<h5>', answerB: '<p>', answerC: '<h1>', correctAnswer: 'C', img: 'https://s3-alpha-sig.figma.com/img/bb18/fb17/fc3957fe591fc5e3e1a280578267654f?Expires=1623628800&Signature=Eo3tzEtmCBn4qqsgs~fhKLhfeBl1YbRDIOL3rGliIViBhjNUz1FlAa4tIRjlaPPVYNL6zUmMrnxoREkDr~AMji9eQySCdy20wsqxviernpoRLMH45G44iaGf6Oz242Om2HxS1enDu3C7qt6s3jvfRvHujTaZIgkkrawFDrim2i9G6T66sUhgu4ynDpU~2zDYjEa-jstg3JeyAP1TzhVr-BhIuQdQiuIG0KtdekCxnVeIiJzy1O18w9CZgy9StgZRfAvbMK22kzaPD3h5axtscsWiAt8WL~W3~8jYfxRWJUtfbb~uGqNanKJXt4pznNTojTrufwsBdorT69BOuNT78g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 4, question: '4.Which tag for the biggest header?', answerA: '<h5>', answerB: '<p>', answerC: '<h1>', correctAnswer: 'C', img: 'https://s3-alpha-sig.figma.com/img/bb18/fb17/fc3957fe591fc5e3e1a280578267654f?Expires=1623628800&Signature=Eo3tzEtmCBn4qqsgs~fhKLhfeBl1YbRDIOL3rGliIViBhjNUz1FlAa4tIRjlaPPVYNL6zUmMrnxoREkDr~AMji9eQySCdy20wsqxviernpoRLMH45G44iaGf6Oz242Om2HxS1enDu3C7qt6s3jvfRvHujTaZIgkkrawFDrim2i9G6T66sUhgu4ynDpU~2zDYjEa-jstg3JeyAP1TzhVr-BhIuQdQiuIG0KtdekCxnVeIiJzy1O18w9CZgy9StgZRfAvbMK22kzaPD3h5axtscsWiAt8WL~W3~8jYfxRWJUtfbb~uGqNanKJXt4pznNTojTrufwsBdorT69BOuNT78g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 5, question: '5.Which tag for the biggest header?', answerA: '<h5>', answerB: '<p>', answerC: '<h1>', correctAnswer: 'C', img: 'https://s3-alpha-sig.figma.com/img/bb18/fb17/fc3957fe591fc5e3e1a280578267654f?Expires=1623628800&Signature=Eo3tzEtmCBn4qqsgs~fhKLhfeBl1YbRDIOL3rGliIViBhjNUz1FlAa4tIRjlaPPVYNL6zUmMrnxoREkDr~AMji9eQySCdy20wsqxviernpoRLMH45G44iaGf6Oz242Om2HxS1enDu3C7qt6s3jvfRvHujTaZIgkkrawFDrim2i9G6T66sUhgu4ynDpU~2zDYjEa-jstg3JeyAP1TzhVr-BhIuQdQiuIG0KtdekCxnVeIiJzy1O18w9CZgy9StgZRfAvbMK22kzaPD3h5axtscsWiAt8WL~W3~8jYfxRWJUtfbb~uGqNanKJXt4pznNTojTrufwsBdorT69BOuNT78g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
]
export default data