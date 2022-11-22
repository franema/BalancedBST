const nodeFactory = (value) => {
    return {
        value: value || null,
        right: null,
        left: null
    }
}

const treeFactory = (array) => {

    root = null

    
    function merge(low, high) {
        let sortedArray = []
        let j = 0
        let k = 0
        for (let i = 0; i < (low.length + high.length); i++) {
            if (low[j] < high[k] || high[k] === undefined) {
                sortedArray.push(low[j])
                j++
            } else {
                sortedArray.push(high[k])
                k++
            }
        }
        return sortedArray
    }
    
    function mergeSort(array) {
        if (array.length === 1) {
            return array
        }
        return merge(mergeSort(array.slice(0, (array.length / 2))), mergeSort(array.slice(array.length / 2)))
    }
    
    function checkDuplicate(array) {
        previous = array[0]
        for (let i = 1; i < array.length; i++) {
            if (previous === array[i]) {
                array.splice(i, 1)
            }
            previous = array[i]
        }
        return array
    }
    
    function createBST(array, start, end) {
        if (start > end) return null;
        let mid = parseInt((start + end) / 2);
        let root = nodeFactory(array[mid]);
        root.left = createBST(array, start, mid - 1);
        root.right = createBST(array, mid + 1, end);
        return root;
    }
    
    const prettyPrint = (node, prefix = '', isLeft = true) => {
        if (node.right !== null) {
            prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
        if (node.left !== null) {
            prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }
    
    function buildTree(array) {
        sortedArray = mergeSort(array)
        cleanArray = checkDuplicate(sortedArray)
        nodeTree = createBST(cleanArray, 0, cleanArray.length-1)
        console.log(nodeTree)
        prettyPrint(nodeTree)
    }

    function insert (value) {
        newNode = nodeFactory(value)
        
    }

    return {
        buildTree
    }
}